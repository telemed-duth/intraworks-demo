/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';
import fs from 'fs';


var db = {
  Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Insert models below
db.Record = db.sequelize.import('../api/record/record.model');
db.Project = db.sequelize.import('../api/project/project.model');
// db.User = db.sequelize.import('../api/user/user.model');
// dynamic import
fs.readdirSync(path.join(config.root, 'server/api')).forEach(folder => {
	fs.readdirSync(path.join(config.root, 'server/api/'+folder)).forEach(file => { 
		if(file.indexOf(".model.js")>0) {
			var filename=file.split('.model.js')[0];
			var model=filename.charAt(0).toUpperCase() + filename.slice(1);
			db[model] = db.sequelize.import('../api/'+folder+'/'+filename+'.model');
		}
	});
});


module.exports = db;
