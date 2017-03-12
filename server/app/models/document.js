module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define('Document', {
    ownerId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'This field cannot be empty'
        }
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'This field cannot be empty'
        }
      }
    },
    access: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'public',
      validate: {
        notEmpty: {
          msg: 'This field cannot be empty'
        },
        isIn: {
          args: [['public', 'private', 'role']],
          msg: 'public, private or role required'
        },
      }
    },
    ownerRoleId: {
      type: DataTypes.STRING
    },
    disable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Document.belongsTo(models.User, {
          foreignKey: 'ownerId',
          onDelete: 'CASCADE',
        });
        Document.belongsTo(models.Type, {
          foreignKey: 'type'
        });
      }
    }
  });
  return Document;
};
