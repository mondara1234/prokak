
/*UserLoginFunction = () =>{
    fetch('http://192.168.1.30/My_SQL/ShowAllDataList.php').then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                dataSource: responseJson
            }, function() {
            });
        })
        .catch((error) => {
            console.error(error);
        });
}
var serverdata=[this.props.dataSource];*/

const initialState={
    serverdataSource:[]
};
export default (state=initialState,action)=>{
    switch (action.type){
        case 'ADD':
            return state.concat([action.dataarray]);
        default:
            return state;
    }

}
