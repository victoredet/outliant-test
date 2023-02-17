<template>
    <footer class="bg-black text-white py-2">
       <div class="col-md-7 col-10 mx-auto">
           <div class="row">
                <div class="col-md-3 col-6 mt-2">
                    <p class="fw-bold">Trading Tools</p>
                    <p>Live trading</p>
                    <p class="link"> <router-link class="text-decoration-none text-white" to="/mining">Cloud Mining</router-link></p>
                </div>
                <div class="col-md-3 col-6 mt-2">
                    <p class="fw-bold">Special programs</p>
                    <p>Referral</p>
                </div>
                <div class="col-md-3 col-6 mt-2">
                    <p class="fw-bold">Information</p>
                    <p>About us</p>
                    <p>Terms of use</p>
                    <p>Privacy policy</p>
                </div>
                <div class="col-md-3 col-6 mt-2">
                    <p class="fw-bold">Get help</p>
                    <p>FAQ</p>
                </div>
            </div>
       </div>
        
    </footer>
</template>
<script>
export default{
    name:'Footer'
}
</script>
