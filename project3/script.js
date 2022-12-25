function generate() {
  let quotes = {
    "― Jules Renard, The Journal of Jules Renard":
      '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
    "― Albert Einstein":
      "“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.”",
    "― Lana Del Rey":
      "“Who are you Are you in touch with all of your darkest fantasies Have you created a life for yourself where you can experience them I have. I am fucking crazy But I am free.”",
    "― Pierce Brown, Red Rising":
      "“Man cannot be freed by the same injustice that enslaved it.”",
    "― Deepak Chopra":
      "“Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.”",
    "― Alysha Speer":
      "“You never really know whats coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity.”",
    "― Mary Astell":
      "“If all men are born free, how is it that all women are born slaves?”",
    "― Monique Duval":
      "“She decided to free herself, dance into the wind, create a new language. And birds fluttered around her, writing “yes” in the sky.”",
    "― C.S. Lewis":
      "“I was not born to be free---I was born to adore and obey.”",
    "― John Galsworthy": "“Life calls the tune, we dance.”",
  };

  let authors = Object.keys(quotes);

  let author = authors[Math.floor(Math.random() * authors.length)];

  let quote = quotes[author];

  document.getElementById("author").innerHTML = author;
  document.getElementById("quote").innerHTML = quote;
}
