<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-7">
          <h1 class="fancy"><span>Contact Me</span></h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-7 order-2 order-sm-1">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6 input-group-lg">
                <label for="inputName">Name</label>
                <input type="text" class="large" id="inputName" placeholder="Name*">
              </div>
              <div class="form-group col-md-6 input-group-lg">
                <label for="inputEmail">Email</label>
                <input type="email" class="large" id="inputEmail" placeholder="Email*">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12 input-group-lg">
                <label for="inputSubject">Subject</label>
                <input type="text" class="large" id="inputSubject" placeholder="Subject of Email*">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="inputMessage">Message</label>
                <textarea name="" id="" placeholder="Message*"></textarea>
              </div>
            </div>
            <center><button type="submit" class="button btn-lg">Submit</button></center>
          </form>
        </div>
        <br>
        <div class="col-12 col-sm-4 offset-md-1 order-1">
          <br>
          <div class="row">
            <div class="col-4">
              <div style="width: 4em; height: 4em; background: rgba(93, 96, 98, .8); padding: 0.5em; border-radius: 3px;"><i style="font-size: 3em; color: #252627" class="material-icons">email</i></div>
            </div>
            <div class="col-7 offset-xs-1" style="height: 80px; line-height: 70px">
              <p style="vertical-align: middle">JovanKelly5@gmail.com</p>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-4">
              <div style="width: 4em; height: 4em; background: rgba(93, 96, 98, .8); padding: 0.5em; border-radius: 3px;"><i style="font-size: 3em; color: #252627" class="material-icons">local_phone</i></div>
            </div>
            <div class="col-7 offset-xs-1" style="height: 80px; line-height: 70px">
              <p style="vertical-align: middle">(347) 499-8592</p>
            </div>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

  hr {
    border-color: grey;
  }

  input, textarea {
    width: 100%;
    border-radius: 0;
    background: rgba(8, 9, 10, .3) !important;
    padding: 10px 15px;
    color: white;
    border: solid 1px gray;
    animation: colorShiftOut 1s;
  }

  input:focus, textarea:focus {
    border: #08090a;
    animation: 1s colorShiftIn;
  }

  input {
    height: 50px;
  }

  textarea {
    height: 150px;
  }

  .button {
    width: 100px;
    padding: 10px;
    background-color: #08090a;
    border: none;
    border-radius: 5px;
    color: white;
  }

  .button:hover {
    animation: 1s wiggle;
    background: none;
    border: solid 1px #08090a;
  }

  @keyframes colorShiftIn {
    from {
      border: grey 1px solid;
    }

    to {
      border: #08090a 1px solid;
    }
  }

  @keyframes colorShiftOut {
    from {
      border: #08090a 1px solid;
    }

    to {
      border: grey 1px solid;
    }
  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  @keyframes wiggle {
  0% {transform: rotate(5deg);}
  25% {transform: rotate(-5deg);}
  50% {transform: rotate(10deg);}
  75% {transform: rotate(-2.5deg);}
  100% {transform: rotate(0deg);}
}
</style>
