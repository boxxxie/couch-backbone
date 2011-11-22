why use this instead of backbone-couch?

no need to make views or filters to work, also no need to add meta-data to your docs for them to work.

you need to use the couchDoc and couchCollection functions to make models and collections that work with couchDB.

you must be careful not to overwrite the functions that couch-backbone uses in backbone.model and backbone.collection. there are a few, url for collection, save for model.

couch-backbone will work with your existing couchDB docs.  currently it's not meant to work with views or filters, however i think that those are very easy to use in backbone already. the main problem this library solves is saving docs to the DB (need to update _rev, which backbone doesn't do).