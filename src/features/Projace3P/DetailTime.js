import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Container, Content, Button, Header, Picker } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import HeaderTitle from '../common/components/HeaderTitle';

class DetailTime extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dataSourcedate: '',
            dataSourceTimeIn: '',
            dataSourceTimeOut: '',
        }
    }

    render() {
        return (
            <Container>
                <Content  style={{backgroundColor:'#fff',marginHorizontal:8}}>
                    <Header style={{alignItems: 'center',backgroundColor:'#fff', height:120 , borderBottomWidth:1}}>
                        <Text style={[styles.buttonText,{fontSize:36, color:'#070707'}]}> {'เพิ่มบันทึกปรับปรุงเวลา'} </Text>
                    </Header>
                    <View style={[styles.containerView,{paddingTop:8}]}>
                        <Icon size={30} name='calendar'/>
                        <Text style={[styles.inputBox,{color:'#070707'}]}>{'วันพฤหัสบดีที่ 24 พฤษภาคม 2561'}</Text>
                    </View>
                    <View style={styles.containerView}>
                        <Icon size={30} name='clock-o'/>
                        <Text style={[styles.inputBox,{color:'#070707'}]}>{'08:04 - 18:04'}</Text>
                    </View>
                    <View style={[styles.containerView,{paddingBottom:8}]}>
                        <Icon size={30} name='pencil'/>
                        <Text style={[styles.inputBox,{color:'#070707'}]}>{'สามพี โปรเฟชชันนัล จำกัด'}</Text>
                    </View>
                    <Text  style={[styles.inputBox,{color:'#070707'}]}>{'เพิ่มบันทึกปรับปรุงเวลา'}</Text>
                    <Picker
                        mode="dropdown"
                        style={{ width: undefined }}
                        selectedValue={this.state.selected}
                    >
                        <Picker.Item label="เลือกประเภทสถานที่" value="key0" />
                        <Picker.Item label="ATM Card" value="key1" />
                        <Picker.Item label="Debit Card" value="key2" />
                        <Picker.Item label="Credit Card" value="key3" />
                        <Picker.Item label="Net Banking" value="key4" />
                    </Picker>
                    <View style={styles.containerView}>
                        <Icon size={30} name='clock-o'/>
                        <TextInput
                            value={this.state.dataSourceTimeIn}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholderTextColor = "#070707"
                            selectionColor="#fff"
                            placeholder="เวลาเข้า"
                            borderBottomWidth={1}
                            style={styles.inputBox}
                        />
                    </View>
                    <View style={styles.containerView}>
                        <Icon size={30} name='clock-o'/>
                        <TextInput
                            value={this.state.dataSourceTimeOut}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholderTextColor = "#070707"
                            selectionColor="#fff"
                            placeholder="เวลาออก"
                            borderBottomWidth={1}
                            style={styles.inputBox}
                        />
                    </View>
                    <View style={styles.containerView}>
                        <Icon size={30} name='sticky-note-o'/>
                        <TextInput
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholderTextColor = "#070707"
                            selectionColor="#fff"
                            placeholder="กรุณากรอกเหตุผล"
                            borderBottomWidth={1}
                            style={styles.inputBox}
                        />
                    </View>
                    <Text style={[styles.buttonText,{color:'#070707',}]}>
                        {'*โปรตรวจสอบข้อมูลการลาก่อนทำการกดบันทึก'}
                    </Text>
                </Content>
                <Button full style={styles.button} onPress={this.UpdateStudentRecord} >
                    <Text style={styles.buttonText}> UPDATE STUDENT RECORD </Text>
                </Button>
            </Container>
        )
    }
}

DetailTime.navigationOptions = ({
    headerTitle: <HeaderTitle text={'กลับหน้าแรกเพิ่มบันทึกแก้ไขเวลา'} />
});

const styles = StyleSheet.create({
    containerView : {
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    inputBox: {
        width:300,
        backgroundColor:'rgba(255, 255,255,0.2)',
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
    },
    button: {
        height: 80,
        backgroundColor:'#1c313a',
        paddingVertical: 13
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
});

export default DetailTime;
