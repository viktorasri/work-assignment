import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as SortAsc } from '../assets/sort-asc.svg';
import { ReactComponent as SortDeasc } from '../assets/sort-deasc.svg';
import Page from '../components/Page';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import Message from '../components/Message';
import { getServersList, sortServersList } from '../redux/actions/serversActions';

const Servers = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error: errorLogin, success: successLogin } = userLogin;

  const serversList = useSelector((state) => state.serversList);
  const { error, loading, servers } = serversList;

  useEffect(() => {
    if (!successLogin) {
      history.push('/login');
    } else {
      dispatch(getServersList());
    }
  }, [successLogin, history, dispatch]);

  return (
    <Page>
      <div className='servers'>
        <div className='row'>
          <div className='servers__heading'>
            <h1>Servers list</h1>
          </div>
          {loading ? (
            <Spinner />
          ) : error ? (
            <Message>{error}</Message>
          ) : servers.length ? (
            <table className='table'>
              <thead>
                <tr>
                  <th>
                    <div className='d-flex align-center'>
                      <h3>Name</h3>
                      <span className='table__sort-btns'>
                        <Button variant='icon' onClick={() => dispatch(sortServersList('name', 'asc'))}>
                          <SortAsc className='icon icon--ice' />
                        </Button>
                        <Button variant='icon' onClick={() => dispatch(sortServersList('name', 'deasc'))}>
                          <SortDeasc className='icon icon--ice' />
                        </Button>
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className='d-flex align-center'>
                      <h3>Distance</h3>
                      <span className='table__sort-btns'>
                        <Button variant='icon' onClick={() => dispatch(sortServersList('distance', 'asc'))}>
                          <SortAsc className='icon icon--ice' />
                        </Button>
                        <Button variant='icon' onClick={() => dispatch(sortServersList('distance', 'deasc'))}>
                          <SortDeasc className='icon icon--ice' />
                        </Button>
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {servers.map((server, index) => (
                  <tr key={index}>
                    <td>{server.name}</td>
                    <td>{server.distance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Message variant='blue'>No servers available</Message>
          )}
        </div>
      </div>
    </Page>
  );
};

export default Servers;
