//class based components
import React from 'react'
import styles from './Price.module.scss'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';

class Prices extends React.Component {
    state = {
        currency: 'USD'
    }
    
    render() {
        let list = '';

        if(this.state.currency === 'USD') {
            list =  <li>
                        Bitcoin Rate for {this.props.bpi.USD.description} :
                        <div className={styles.priceTag}>{this.props.bpi.USD.code}</div>
                        <div><strong>{this.props.bpi.USD.rate}</strong></div>
                    </li>

        } else if(this.state.currency === 'GBP') {
            list =  <li>
                        Bitcoin Rate for {this.props.bpi.USD.description} :
                        <div className={styles.priceTag}>{this.props.bpi.GBP.code}</div>
                        <div><strong>{this.props.bpi.GBP.rate}</strong></div>
                    </li>

        } else if(this.state.currency === 'EUR') {
            list =  <li>
                        Bitcoin Rate for {this.props.bpi.USD.description} :
                        <div className={styles.priceTag}>{this.props.bpi.EUR.code}</div>
                        <div><strong>{this.props.bpi.EUR.rate}</strong></div>
                    </li>

        }

        return (
            <div className={styles.priceTable}>
                <ul>
                   {list}
                </ul>

                <Select value={"USD"} className={styles.formControl} onChange={e => this.setState({currency: e.target.value})}>
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"GBP"}>GBP</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
                </Select>
            </div>
        );
    }
} 


export default Prices;