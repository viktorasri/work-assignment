import React from 'react';

import { ReactComponent as SortAsc } from '../assets/sort-asc.svg';
import { ReactComponent as SortDeasc } from '../assets/sort-deasc.svg';
import Page from '../components/Page';
import Button from '../components/Button';

const Servers = () => {
  return (
    <Page>
      <div className='servers'>
        <div className='row'>
          <div className='servers__heading'>
            <h1>Servers list</h1>
          </div>
          <table className='table'>
            <thead>
              <tr>
                <th>
                  <div className='d-flex align-center'>
                    <h3>Name</h3>
                    <span className='table__sort-btns'>
                      <Button variant='icon'>
                        <SortAsc className='icon icon--ice' />
                      </Button>
                      <Button variant='icon'>
                        <SortDeasc className='icon icon--ice' />
                      </Button>
                    </span>
                  </div>
                </th>
                <th>
                  <div className='d-flex align-center'>
                    <h3>Distance</h3>
                    <span className='table__sort-btns'>
                      <Button variant='icon'>
                        <SortAsc className='icon icon--ice' />
                      </Button>
                      <Button variant='icon'>
                        <SortDeasc className='icon icon--ice' />
                      </Button>
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Server 1</td>
                <td>96</td>
              </tr>
              <tr>
                <td>Server 2</td>
                <td>545</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Page>
  );
};

export default Servers;
