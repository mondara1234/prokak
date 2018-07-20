export  default  function () {
    var url = 'http://www.json-generator.com/api/json/get/cfOmgHmYMO?indent=2'
    fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                dataSource: responseJson.Inbizth_array,
                isLoading: false
            })
        })
        .catch((error) => {
            console.log(error)
        })
    return[this.state.dataSource]


}
