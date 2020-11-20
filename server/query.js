//qCNU = query create new user

const qCNU = {create:"insert into owner(name,email,password) values($1,$2,$3)",
              match:"select count(email) from owner where email=$1",
              findHash:"select password from owner where email=$1",
              findOne:"select * from owner where email=$1",
              findProfile:"select * from profile where owner_id=$1",
              addImage:"insert into upload_image (url,owner_id) values ($1,$2)"
            }

module.exports = qCNU