module.exports = (sequelize, DataTypes) => {
    const dictionary = sequelize.define('dictionary', {
      word: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        allowNull: false,
        comment: '영어 단어'
      },
      type: {
        type: DataTypes.STRING(10),
        allowNull: false,
        comment: '품사'
      },
      meaning: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: '뜻'
      },
    }, {
      tableName: 'dictionary',
      comment: '단어장',
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
    return dictionary;
  };
  