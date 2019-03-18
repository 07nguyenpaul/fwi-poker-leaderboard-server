# FWI - Poker LeaderBoard Server

## Getting Started

1. `$ yarn install`
1. `$ createdb fwi_dev`
1. `$ createdb fwi_test`
1. `$ yarn db:migrate`
1. `$ yarn db:migrate:test`
1. `$ yarn db:seed`
1. `$ nodemon start`
    * `$ yarn global add nodemon` if you don't have it... this will restart your server on *most* changes

### Tests, test coverage & reports, and linter
Tests (also runs linter on success)
* `$ yarn test`

Linter alone
1. `$ yarn lint`

### [curl docs](./curl.md)
