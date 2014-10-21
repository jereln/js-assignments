function Hero(name, secretIdentity) {
  this.name = name;
  this.secretIdentity = secretIdentity;
  this.revealIdentity = function () {
    return(this.name + ' is really ' + this.secretIdentity);
    };
  }

Hero.prototype.toString = function () {
  var result = ""
  for (var i in this) {
    result += i + ": " + this[i] + "\n";
  }
  return result;
}

var one = new Hero('Batman', 'Bruce Wayne');

console.log(one.revealIdentity());
console.log(one.toString());