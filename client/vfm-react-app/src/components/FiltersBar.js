import * as React from 'react'
import { Chip, Box, Stack, ToggleButton } from '@mui/material';


// These filter bars appear below the search bar. On click, they show items under that category
// in the search results 

const FiltersBar = ({filters, exclusive, selectedItems, setSelectedItems, noOutput}) => {
    let createInitialItemStates = () => { // Sets all the filters to false
        const filterStates = {};
        for (const name of filters) {
            filterStates[name] = false;
        }
        return filterStates
    }

    let [itemStates, setItemStates] = React.useState(createInitialItemStates())

    let toggleItem = (itemName) => {
        return () => {
            console.log(itemName)
            if (exclusive) {
                let newStates = {}
                Object.keys(itemStates).forEach(item => {newStates[item] = false})
                if (selectedItems.includes(itemName)) {
                    // Deactivate Item
                    setSelectedItems([])
                    setItemStates(newStates)
                } else {
                    // Activate Item
                    setSelectedItems([itemName])
                    setItemStates({...newStates, [itemName]: true})
                }
            } else {
                if (selectedItems.includes(itemName)) {
                    // Deactivate Item
                    setSelectedItems(selectedItems.filter(i => i !== itemName))
                    setItemStates({...itemStates, [itemName]: false})
                } else {
                    // Activate Item
                    setSelectedItems([
                        ...selectedItems,
                        itemName
                    ])
                    setItemStates({...itemStates, [itemName]: true})
                }
            }
            console.log(selectedItems)
            console.log(itemStates)
        } 
    }
    return (
        <Box sx={{m: 3}}>
            <center>
            <Stack spacing={2} direction="row" justifyContent="left">
                {filters.map( x => <Chip disableRipple fontWeight="bold" color={itemStates[x] ? "primary" : "secondary"} name={x} variant={itemStates[x] ? "contained" : "outlined"} label={x} onClick={toggleItem(x)} />)}
            </Stack>
            </center>
            
        </Box>
    );
}

export default FiltersBar;