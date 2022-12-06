import { Circle } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CssBaseline,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { color, Stack, ThemeProvider } from "@mui/system";
import FarmerHeader from "../components/headers/FarmerHeader.js";
import theme from "../theme/theme.js";

const FarmerDashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <FarmerHeader />
      <Grid container spacing={2} p={4}>
        <Grid item xs={12} md={4}>
          <Stack
            height="100%"
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar sx={{ width: 100, height: 100 }} />
            <Typography variant="h5">John Doe</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" component="h1" gutterBottom>
            Farmer Dashboard
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ mb: 2, color: "text.secondary" }}
          >
            This is the farmer dashboard. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Your Products
            </Typography>
            <ProductTable />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Card variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Your Orders
            </Typography>
            <OrderTable />
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

const ProductTable = () => {
  const CreateRow = (name, price, stock) => {
    return {
      name: name,
      price: price,
      stock: stock,
    };
  };

  const rows = [
    CreateRow("Potato", 75, 100),
    CreateRow("Tomato", 500, 100),
    CreateRow("Orange", 100, 100),
    CreateRow("Banana", 50, 100),
    CreateRow("Pineapple", 100, 100),
    CreateRow("Apple", 100, 100),
    CreateRow("Grapes", 100, 100),
    CreateRow("Mango", 100, 100),
  ];

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Stock</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.price}</TableCell>
            <TableCell>{row.stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const OrderTable = () => {
  const CreateRow = (id, customer, total, status) => {
    return {
      id: id,
      customer: customer,
      total: total,
      status: status,
    };
  };

  const rows = [
    CreateRow("I-1001", "John Doe", 1000, "Pending"),
    CreateRow("I-1002", "Jane Doe", 1000, "Pending"),
    CreateRow("O-1003", "John Doe", 1000, "Completed"),
    CreateRow("O-1004", "Jane Doe", 1000, "In Transit"),
    CreateRow("I-1005", "John Doe", 1000, "Pending"),
    CreateRow("I-1006", "Jane Doe", 1000, "Pending"),
    CreateRow("O-1007", "John Doe", 1000, "Completed"),
  ];

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order ID</TableCell>
          <TableCell>Customer</TableCell>
          <TableCell>Total</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.customer}</TableCell>
            <TableCell>{row.total}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const Bar = ({ value, max = 100, color, direction = "horizontal" }) => {
  const isVertical = direction === "vertical";

  return (
    <Stack
      sx={{
        height: isVertical ? "100%" : 8,
        width: isVertical ? 8 : "100%",
        borderRadius: 1,
        bgcolor: "grey.300",
        position: "relative",
      }}
    >
      <Stack
        sx={{
          height: isVertical ? `${(value / max) * 100}%` : "100%",
          width: isVertical ? "100%" : `${(value / max) * 100}%`,
          borderRadius: 1,
          bgcolor: color,
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      />
    </Stack>
  );
};

const WeeklySales = () => {
  // Bar chart
  const data = {
    Mon: 20,
    Tue: 160,
    Wed: 50,
    Thu: 30,
    Fri: 90,
    Sat: 50,
    Sun: 60,
  };

  const max = Math.max(...Object.values(data));

  return (
    <Stack spacing={2} direction="column">
      {Object.keys(data).map((day) => (
        <Stack key={day} direction="row" spacing={1} alignItems="center">
          <Typography variant="body2" sx={{ width: 40 }}>
            {day}
          </Typography>
          <Bar value={data[day]} max={max} color="green" />
          <Typography variant="body2">${data[day]}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

const Stat = ({ label, value, color }) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      sx={{
        bgcolor: color,
        padding: 1,
      }}
      height="100%"
      width="100%"
    >
      <Typography variant="h5">{value}</Typography>
      <Typography variant="body1">{label}</Typography>
    </Stack>
  );
};

const Notifications = () => {
  const CreateRow = (status, message) => {
    return {
      status: status,
      message: message,
    };
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "success":
        return "lightgreen";
      case "warning":
        return "lightyellow";
      case "error":
        return "lightcoral";
      default:
        return "transparent";
    }
  };

  const rows = [
    CreateRow("success", "New order received"),
    CreateRow("error", "Inventory low for Potato"),
    CreateRow("warning", "Order O-1003 is delayed"),
    CreateRow("info", "New customer registered"),
    CreateRow("success", "New order received"),
    CreateRow("error", "Order O-1004 is returned"),
  ];

  return (
    <Stack direction="column" borderRadius={4} sx={{ bgcolor: "grey.300" }}>
      {rows.map((row) => (
        <Stack
          key={row.message}
          direction="row"
          alignItems="center"
          sx={{
            bgcolor: getStatusColor(row.status),
            padding: 1,
          }}
        >
          <Typography variant="body1">{row.message}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default FarmerDashboard;
