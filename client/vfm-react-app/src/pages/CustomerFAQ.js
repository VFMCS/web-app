import * as React from 'react';
import {ThemeProvider, CssBaseline, Stack, Box} from '@mui/material'
import theme from '../theme/theme.js'
import ConsumerHeader from '../components/headers/ConsumerHeader';
import Faq from 'react-faq-component'
const CustomerFAQPage = () => {
    const styles = {
        titleTextColor: "black",
        rowTitleColor: "green",
    };
    const data = {
        title: "Customer FAQ",
        rows: [
            {   title: "How do I return to the product overview?",
                content: "From another page, you can simply click the logo in the top toolbar.\nYou will also be redirected to this page whenever you sign in."
            },
            {   title: "How does searching work?",
                content: "When viewing products, simply enter a query term and click the magnifying glass. Try to keep query terms short and generic"
            },
            {   title: "How do I add products to my cart?",
                content: "When you find an item you like, simply click add to cart"
            },
            {   title: "How do I purchase the items I want?",
                content: "Rather than purchasing items through our website, you will reserve them, then arrange pickup and payment directly with the farmer"
            },
            {   title: "How do I view items in my cart?",
                content: "Click the cart icon in the top right corner of the screen"
            },
            {   title: "How can I find a specific item?",
                content: "You can either search for the item's name or filter by its type"
            },
            {   title: "How can I view featured farmers and products?",
                content: "When on the products page, unselect all filters."
            },
            {   title: "I reserved an item, now what?",
                content: "Your reservation is now pending farmer approval. Once approved, you will have 24 hours to pick up the items from the farmer's location."
            },
        ]
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
                <Stack direction="column">
                    <ConsumerHeader />
                    <Box sx={{m: 3}}>
                        <Faq data={data} styles={styles} />
                    </Box> 
                </Stack>
        </ThemeProvider>
    )
  };
  
  export default CustomerFAQPage
  
  