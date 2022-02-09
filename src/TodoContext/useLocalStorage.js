import React from "react";
function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [items, setItems] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                //throw new Error('Failed to connect to API.');
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = [];
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                }
                setItems(parsedItem);
                setLoading(false);
            }
            catch (error) {
                setError(error);
            }
        }, 250);
    });

    const saveItem = (newItems) => {
        try {
            const stringifyItems = JSON.stringify(newItems);
            localStorage.setItem(itemName, stringifyItems);
            setItems(newItems);
        } catch (error) {
            setError(error);
        }
    };

    return {
        items,
        saveItem,
        loading,
        error
    };

}

export {useLocalStorage};