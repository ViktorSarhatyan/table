import React from "react";
import Header from "./components/header";
import Filters from "./components/filters";
import Table from "./components/table";
import "./App.css";
import Pageination from "./components/pageination";
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userList : []
        }
    }
    perPage =10;
    page = 2;

   
    handlePerPageChange = event => {
        this.perPage = event.target.value;
        this.fetchUserList(); 
    }

    handlePageChange = value => {
        this.page = value;
        this.fetchUserList();
    }

    fetchUserList(){
        fetch(`https://randomuser.me/api/?page=${this.page}&results=${this.perPage}`)
        .then(response => {
            if(response.ok){
                return response.json();
            }
        })
        .then(data => {
            this.setState({ userList : data.results})
        })
    }

    componentDidMount(){
        this.fetchUserList()
    }
    handleChangeUserList = newUserList => {
        this.setState({ userList: newUserList })
    }


    render(){
        return (
            <div className="og-contianer">
                    <Header text="Users List"/>
                    <Filters onPerPageChange={this.handlePerPageChange}/>
                    <Table userList = {this.state.userList}
                            pageForId={(this.page - 1) * this.perPage}
                            onChangeUserList={this.handleChangeUserList}
                    />
                    <Pageination 
                        pageCount={5000 / this.perPage}
                        currentPage={this.page}
                        onPageChange={this.handlePageChange}
                    />
            </div>
        )
    }
}

export default App;