migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("24tr50qc9encsxk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ltkwd3mi",
    "name": "username",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("24tr50qc9encsxk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ltkwd3mi",
    "name": "uid",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
