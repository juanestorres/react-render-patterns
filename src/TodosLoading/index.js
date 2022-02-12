import React from "react";
import MyLoader from "../MyLoader";
function TodosLoading() {
    return (
        <div style={{
            width: '100%',
            height: '100%', display: 'flex', justifyItems: 'center'
        }}>
            <MyLoader />
        </div>
    );
}

export { TodosLoading };