export const timeAgo = (publishedAt) => {
    const currentDate = new Date();
    const publishDate = new Date(publishedAt);
    const timeDifference = currentDate - publishDate;
  
    // Millisekundlarni daqiqaga, soatlarga, kunlarga, oylarga va yillarga aylantirish
    const millisecondsPerMinute = 60 * 1000;
    const millisecondsPerHour = 60 * 60 * 1000;
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const millisecondsPerMonth = 30 * 24 * 60 * 60 * 1000;
    const millisecondsPerYear = 365 * 24 * 60 * 60 * 1000;
  
    const minutesAgo = Math.floor(timeDifference / millisecondsPerMinute);
    const hoursAgo = Math.floor(timeDifference / millisecondsPerHour);
    const daysAgo = Math.floor(timeDifference / millisecondsPerDay);
    const monthsAgo = Math.floor(timeDifference / millisecondsPerMonth);
    const yearsAgo = Math.floor(timeDifference / millisecondsPerYear);
  
    if (yearsAgo >= 1) {
      return `${yearsAgo} year${yearsAgo > 1 ? 's' : ''} ago`;
    } else if (monthsAgo >= 1) {
      return `${monthsAgo} month${monthsAgo > 1 ? 's' : ''} ago`;
    } else if (daysAgo >= 1) {
      return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
    } else if (hoursAgo >= 1) {
      return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
    } else {
      return `${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`;
    }
  };


// FOrmat view
  export const formatViewNum = (count) => {
    const num = Number(count);
    if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + "m";
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + "k";
    } else {
      return num.toString();
    }
  };



  // Format data

  export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };


  // Description textni ichidagi kelib qolgan urlni linkka aylantirish   
 export const formatLinkText = (text) => {
    if (!text) {
      return null; 
    }
  
    const urlRegex = /(https?:\/\/[^\s]+)/g;
  
    return text.split(urlRegex).map((part, index) => {
      if (index % 2 === 1) {
        return <a style={{display: 'inline-block'}} key={index} href={part} target="_blank" rel="noopener noreferrer">{part}</a>;
      }
      return part;
    });
  };



  
  