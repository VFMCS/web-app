import * as React from 'react' 
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
  Divider,
  Box,
  
} from "@mui/material";
import { color, Stack, ThemeProvider } from "@mui/system";
import FarmerHeader from "../components/headers/FarmerHeader.js";
import theme from "../theme/theme.js";

const FarmerDashboard = () => {
  const [farmer_name, setFarmer_Name] = React.useState('')
  const [farmer_first_name, setFarmer_First_Name] = React.useState('')
  const [farmer_description, setFarmer_Description] = React.useState('')
  const [farmer_location, setFarmer_Location] = React.useState('')
  const [farmer_image_url, setFarmer_Image_Url] = React.useState('');


  React.useEffect(() => {
    
    //get farmer's details
    let url = 'http://localhost:3001/api/vendors/' + localStorage.getItem("curr_user_id");
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {setFarmer_Name(data[0].first_name + " " + data[0].last_name); setFarmer_First_Name(data[0].first_name); setFarmer_Description(data[0].about_me); setFarmer_Location(data[0].address); setFarmer_Image_Url(data[0].image_url)})
        .catch(err => console.error(err));


  }, [])

  

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
      <FarmerHeader />

      <Typography variant="h6" sx={{margin: 2, color: "black"}}>
        {farmer_first_name}'s Dashboard
      </Typography>
      <Divider />

      <Stack direction="row" alignItems="left" spacing={3} marginTop={5} marginLeft={5}>
          <Card variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Your Products
            </Typography>
            <ProductTable />
          </Card>

          <Card variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Your Orders
            </Typography>
            <OrderTable />
          </Card>
        </Stack>
    </ThemeProvider>
  );
};

const ProductTable = () => {

  const [products, setProducts] = React.useState([]) // capture data from GET request

  React.useEffect(() => {
     //get farmer's products
     let url = 'http://localhost:3001/api/products/' + localStorage.getItem("curr_user_id");
     console.log(url);
     fetch(url).then(response => response.json()).then(data => setProducts(data))
         .catch(err => console.error(err));

  }, [])

  const CreateRow = (name, price, stock) => {
    return {
      name: name,
      price: price,
      stock: stock,
    };
  };

  const rows = [];

  products.forEach(prod => {
    rows.push(CreateRow(prod.name, prod.price, prod.quantity));
  });

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
  const [transactions, setTransactions] = React.useState([]) // capture data from GET request
  const [customer_name, setCustomerName] = React.useState('')


  React.useEffect(() => {
     //get all of farmer's transactions
     let url = 'http://localhost:3001/api/transaction/get-by-vendor/' + localStorage.getItem('curr_user_id');
     console.log(url);

     fetch(url).then(response => response.json()).then(data => setTransactions(data))
         .catch(err => console.error(err));


  }, [])

  const CreateRow = (id, customer, total, status) => {
    return {
      id: id,
      customer: customer,
      total: total,
      status: status,
    };
  };

  //transaction-id, name of customer, total cost, and status
  const rows = [];

  transactions.forEach(transaction => {
    let url = 'http://localhost:3001/curr-user-api/' + transaction.customer_id;
    console.log(url);

    fetch(url).then(response => response.json()).then(data => {console.log(data[0].first_name + ' ' + data[0].last_name); setCustomerName(data[0].first_name + ' ' + data[0].last_name)}).then(rows.push(CreateRow(transaction.transaction_id, customer_name, transaction.price, 'Pending')))
         .catch(err => console.error(err));
    
  });

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
