import React, { Component } from 'react';
import { FlatList , Text } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';


class  Contact extends Component {
    constructor(props ) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        title: 'Contact'
    }

    render() {
        return (
            <Card featuredTitle='Contact Information'>
                <Text style={{marginBottom: 20}}>
                    1 Nucamp Way
                    Seattle, WA 98001
                    U.S.A.

                    Phone: 1-206-555-1234
                    Email: campsites@nucamp.co
                </Text>
            </Card>
        );
    }
}

export default Contact;