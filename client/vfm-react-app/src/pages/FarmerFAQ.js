import * as React from 'react';
import {ThemeProvider, CssBaseline, Stack, Box} from '@mui/material'
import theme from '../theme/theme.js'
import FarmerHeader from '../components/headers/FarmerHeader';
import Faq from 'react-faq-component'
const FarmerFAQPage = () => {
    const styles = {
        titleTextColor: "black",
        rowTitleColor: "green",
    };
    const data = {
        title: "Farmer FAQ",
        rows: [
            {   title: "How do I view my products?",
                content: "After logging in, you will be brought to your product page. From another location, click the logo on the top toolbar."
            },
            {   title: "How does searching work?",
                content: "When viewing your products, simply enter a query term and click the magnifying glass. Try to keep query terms short and generic"
            },
            {   title: "Do you provide data about my sales and inventory?",
                content: "Yes! Navigate to your farmer dashboard by opening the sidebar and clicking Dashboard"
            },
            {   title: "What is a default image? (during item creation) ",
                content: "When creating items, we give you the option to select a generic image based on the type of item you are creating. \nYou're also welcome to add your own image."
            },
            {   title: "Why must I approve transactions?",
                content: "Approving transactions ensures that the customers reserving your produce are reliable and likely to honor their reservation."
            },
            {   title: "What is the difference between product type and product category?",
                content: "Product type is the specific item that you are creating (ex. Blueberries), while product category is a term used for filtering. We suggest something like 'Fruit' or 'Vegetable' for product category."
            },
        ]
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
                <Stack direction="column">
                    <FarmerHeader />
                    <Box sx={{m: 3}}>
                        <Faq data={data} styles={styles} />
                    </Box> 
                </Stack>
        </ThemeProvider>
    )
  };
  
  export default FarmerFAQPage
  
  