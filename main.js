function App(){

    return(
        <div className="main">
            <h1 className="header">Quick Start</h1>
            <h2>Welcome to the React documentation! This page will give you an introduction to the 80% 
                of React concepts that you will use on a daily basis</h2>

                <div className="list">
                    <h1> You will learn</h1>
                    <ul>
                        <li>How to create and nest components</li>
                        <li>How to add markup and styles</li>
                        <li>How to display data </li>
                        <li>How to render conditions and lists</li>
                        <li>How to share data between components</li>
                    </ul>

                </div>



        </div>
    )
}





ReactDOM.createRoot(document.querySelector('#root')).render(<App />);