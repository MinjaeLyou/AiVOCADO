module.exports = (sequelize, DataTypes) => {
    const wordNature = sequelize.define('wordNature', {
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
      image: {
        type: DataTypes.STRING(200),
        allowNull: true,
        comment: '사진'
      }
    }, {
      tableName: 'wordNature',
      comment: '자연 카테고리 단어',
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
    return wordNature;
  };
  