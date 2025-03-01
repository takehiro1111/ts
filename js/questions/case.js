{
  let season;

  season = showSeason(3);
  console.log(season);

  season = showSeason(6);
  console.log(season);

  season = showSeason(9);
  console.log(season);

  season = showSeason(12);
  console.log(season);

  season = showSeason(13);
  console.log(season);

  function showSeason(month) {
    switch (month) {
      case 3:
      case 4:
      case 5:
        return '春';

      case 6:
      case 7:
      case 8:
        return '夏';

      case 9:
      case 10:
      case 11:
        return '秋';

      case 12:
      case 1:
      case 2:
        return '冬';

      default:
        return '季節不明';
    }
  }
}

{
  let season;

  season = showSeason(3, 'japan');
  console.log(season);

  season = showSeason(6, 'japan');
  console.log(season);

  season = showSeason(9, 'japan');
  console.log(season);

  season = showSeason(12, 'japan');
  console.log(season);

  season = showSeason(5, 'ph');
  console.log(season);

  season = showSeason(6, 'ph');
  console.log(season);

  function showSeason(month, country) {
    if (country === 'japan') {
      switch (month) {
        case 3:
        case 4:
        case 5:
          return '春';

        case 6:
        case 7:
        case 8:
          return '夏';

        case 9:
        case 10:
        case 11:
          return '秋';

        case 12:
        case 1:
        case 2:
          return '冬';

        default:
          return '季節不明';
      }
    } else if (country === 'ph') {
      switch (month) {
        case 12:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          return '乾季';

        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
          return '雨季';

        default:
          return '季節不明';
      }
    }
  }
}
