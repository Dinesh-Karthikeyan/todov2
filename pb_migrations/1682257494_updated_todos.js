migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("24tr50qc9encsxk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qysf4jcl",
    "name": "creator",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("24tr50qc9encsxk")

  // remove
  collection.schema.removeField("qysf4jcl")

  return dao.saveCollection(collection)
})
