db.user.update({}, {
  $set: {
    'head': '',
    'qq': '',
    'phoneNumber': '',
    'userinfo': {
      'association': {
        'name': '',
        'department': '',
        'position': '',
      },
      'enterSchoolYear': '',
      'major': '',
    },
    'rule': ''
  }
}, true, true)
