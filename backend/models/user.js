module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
      userId: {
        type: DataTypes.STRING(10),
        allowNull: false,
        comment: '기가지니 아이디'
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        comment: '사용자이름'
      },
      image: {
        type: DataTypes.STRING(200),
        allowNull: true,
        comment: '유저 이미지'
      },
      score: {
        type: DataTypes.INTEGER(5),
        defaultValue: 0,
        comment: '점수'
      }
    }, {
      tableName: 'user',
      comment: '유저',
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
    return user;
  };
  