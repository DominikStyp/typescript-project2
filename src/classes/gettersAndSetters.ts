class Beer {
  // WARNING: if you declare a setter you cannot initilize it as class property
  // private percentate: float; //error
  set percentage(percentage: number) {
    this.percentage = percentage;
  }

  get percentage(): number {
    if (this.percentage <= 0) {
      throw new Error("Invalid percentage");
    }
    return this.percentage;
  }
}
