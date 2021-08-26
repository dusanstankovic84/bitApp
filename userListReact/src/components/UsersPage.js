import React, { Component } from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash'

import User from 'models/User'

import Loader from '../components/Loader/Loader'
import NoResults from '../components/NoResults/NoResults'
import SearchBar from '../components/searchBar/searchBarSearchBar'

import UsersList from './UsersList'
import UserStats from './UserStats'

class UsersPage extends Component {
    constructor(props) {
        super(props)
        this.state = this.initState()
    }

    initState() {
        const { users } = this.props

        return {
            isLoading: _.isEmpty(users),
            allUsers: users,
            filteredUsers: users,
            stats: {
                maleCount: 0,
                femaleCount: 0
            }
        }
    }

    componentDidUpdate(prevProps) {
        const { users } = this.props
        const prevUsers = prevProps.users

        const usersChanged = !_.isEqual(users, prevUsers)

        if (usersChanged) {
            const stats = this.calculateStats(users)

            this.setState({
                allUsers: users,
                filteredUsers: users,
                isLoading: _.isEmpty(users),
                stats
            })
        }
    }

    calculateStats = (users = []) => {
        const computeStats = (statsResult, person) => {
            person.isFemale() ? statsResult.femaleCount++ : statsResult.maleCount++
            return statsResult
        }

        const initialStats = { maleCount: 0, femaleCount: 0 }
        return users.reduce(computeStats, initialStats)
    }

    searchUsers = (searchText, users) => {
        const allUsers = users || this.state.allUsers

        const filteredUsers = allUsers.filter(user => {
            const { fullName } = user
            return _.toLower(fullName).includes(_.toLower(searchText))
        })

        const stats = this.calculateStats(filteredUsers)

        this.setState({ filteredUsers, stats })
    }

    renderUsers = () => {
        const { isGridMode } = this.props
        const { filteredUsers } = this.state

        return _.isEmpty(filteredUsers) ? (
            <NoResults />
        ) : (
            <UsersList isGridMode={isGridMode} users={filteredUsers} />
        )
    }

    render() {
        if (this.state.isLoading) {
            return <Loader />
        }

        const { searchUsers, renderUsers } = this

        return (
            <div className="container">
                <SearchBar onSearch={searchUsers} />
                <UserStats stats={this.state.stats} />
                {renderUsers()}
            </div>
        )
    }
}

UsersPage.propTypes = {
    isGridMode: PropTypes.bool,
    users: PropTypes.arrayOf(PropTypes.instanceOf(User))
}

export default UsersPage
