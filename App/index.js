import React, {Component} from 'react'
import {Text, View} from 'react-native'
import * as Qiscus  from "./services/qiscus";

export default class App extends Component {
    componentDidMount() {
        Qiscus.init()

        this.subscription = Qiscus.login$()
            .map(data => data.user)
            .take(1)
            .subscribe({
                next: data => {
                   console.log("login berhasil")
                }
            });
        Qiscus.qiscus
            .setUser("yoga", "yoga")
            .catch(() => console.log("Failed login"));
    }

    render() {
        return (
            <>
                <Text>Test</Text>
            </>
        )
    }
}
