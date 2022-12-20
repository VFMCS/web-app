import * as React from 'react';
import {ThemeProvider, CssBaseline, Stack, Box} from '@mui/material'
import theme from '../theme/theme.js'
import FarmerHeader from '../components/headers/FarmerHeader';
import Faq from 'react-faq-component'

// An FAQ Page for Farmer Reference
const FarmerFAQPage = () => {

    // Styles for text color
    const styles = {
        titleTextColor: "black",
        rowTitleColor: "green",
    };

    //FAQ Data
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
                content: "When creating items, we give you the option to select a generic image based on the type of item you are creating. <br />You're also welcome to add your own image."
            },
            {   title: "Why must I approve transactions?",
                content: "Approving transactions ensures that the customers reserving your produce are reliable and likely to honor their reservation."
            },
            {   title: "How do I approve transactions?",
                content: "Navigate to the Reserve Requests page (using the sidebar) and choose the appropriate option to approve or reject <br /> Your customer will have 24 hours to pick up their items once approved."
            },
            {   title: "What is the difference between product type and product category?",
                content: "Product type is the specific item that you are creating (ex. Blueberries), while product category is a term used for filtering. <br />We suggest something like 'Fruit' or 'Vegetable' for product category."
            },
            {   title: "How do I deal with a fraudulent customer?",
                content: "Please email _____@gmail.com about any fraudulent activity. State the issue and any parties involved."
            },
        ]
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
                <FarmerHeader />
                <Stack direction="column">
                    <Box sx={{m: 3, minHeight: "75vh"}}>
                        <Faq data={data} styles={styles} />
                    </Box> 
                </Stack>
        </ThemeProvider>
    )
  };
  
  export default FarmerFAQPage
  
  