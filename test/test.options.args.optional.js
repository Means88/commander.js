/**
 * Module dependencies.
 */

var program = require('../')
  , should = require('should');

program
  .version('0.0.1')
  .option('-c, --cheese [type]', 'optionally specify the type of cheese')
  .option('-n, --name [type]', 'conflict');

program.parse(['node', 'test', '--cheese']);
program.cheese.should.be.true();

program.name.should.be.instanceOf(Function);
should.equal(program.getOption('name'), undefined);
