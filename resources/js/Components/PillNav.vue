<template>
    <ul class="nav nav-tabs process-model more-icon-preocess" id="tablist" role="tablist">
        <li role="presentation" :class="{active: activeTab === 1, unlocked: unlockedTab > 1, lastUnlocked: unlockedTab === 1, visited: activeTab > 1}">
            <a href="#textilienTab" aria-controls="textilienTab" role="tab" data-toggle="tab" name="step1">
                <font-awesome-icon :icon="['fas', 'shopping-cart']" />
            </a>
        </li>
        <li role="presentation" :class="{active: activeTab === 2, unlocked: unlockedTab > 2, lastUnlocked: unlockedTab === 2, visited: activeTab > 2}">
            <a href="#motivTab" aria-controls="motivTab" role="tab" data-toggle="tab" name="step2">
                <font-awesome-icon :icon="['fas', 'address-card']" />
            </a>
        </li>
        <li role="presentation" :class="{active: activeTab === 3, unlocked: unlockedTab > 3, lastUnlocked: unlockedTab === 3, visited: activeTab > 3}">
            <a href="#datenTab" aria-controls="datenTab" role="tab" data-toggle="tab" name="step3">
                <font-awesome-icon :icon="['fas', 'dollar-sign']" />
            </a>
        </li>
        <li role="presentation" :class="{active: activeTab === 4, unlocked: unlockedTab > 4, lastUnlocked: unlockedTab === 4, visited: activeTab > 4}">
            <a href="#pruefenTab" aria-controls="pruefenTab" role="tab" data-toggle="tab" name="step4">
                <font-awesome-icon :icon="['fas', 'check']" />
            </a>
        </li>
    </ul>  
</template>

<script>
export default {
    props: {
        activeTab: {           
            type: Number,
            required: true
        },
        unlockedTab: {           
            type: Number,
            required: true
        }
    },
}
</script>

<style scoped>

.nav-tabs { border: 0; }
.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active { border: 0; }
.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover { border: 0; }

.nav-tabs.process-model > li.active > a,
.nav-tabs.process-model > li.active > a:hover,
.nav-tabs.process-model > li.active > a:focus,
.process-model li a:hover,
.process-model li a:focus {
	border: none;
	background: transparent;
}

.process-model {
	list-style: none;
	padding: 0;
	position: relative;
	margin: 20px auto 0;
	border: none;
	z-index: 0;
}
.process-model li {
	display: block;
	margin: 0 auto;
}
.process-model li::after {
	background: #e6e6e6 none repeat scroll 0 0;
	bottom: 0;
	content: "";
	display: block;
	height: 2px;
	margin: 0 auto;
	position: absolute;
	right: 140px;
	top: 33px;
	width: 25%;
	z-index: -1;
}
.process-model li.unlocked::after {
	background: #FFEBC9;
}
.process-model li:first-child::after { width: 75%; }
.process-model li:nth-child(2)::after { width: 50%; }
.process-model li.visited::after { background: #1a1a1a; }
.process-model li:last-child::after { width: 0; }
.process-model li {
	display: inline-block;
	width: 18%;
	text-align: center;
	float: none;
}
.nav-tabs.process-model > li.active > a,
.nav-tabs.process-model > li.active > a:hover,
.nav-tabs.process-model > li.active > a:focus,
.process-model li a:hover,
.process-model li a:focus {
	border: none;
	background: transparent;
}
.process-model li a {
	padding: 0;
	border: none;
	color: #e5e5e5;
}
.process-model li.active,
.process-model li.visited {
	color: #e5e5e5;
}
.process-model li.active a,
.process-model li.active a:hover,
.process-model li.active a:focus,
.process-model li.visited a,
.process-model li.visited a:hover,
.process-model li.visited a:focus {
	color: #1a1a1a;
}
.process-model li svg {
	display: block;
	height: 68px;
	width: 68px;
	text-align: center;
	margin: 0 auto;
	background: #f2f2f2;
	border: 2px solid #e6e6e6;
	line-height: 65px;
	font-size: 30px;
	border-radius: 50%;
    padding: 18px 0;
}
.process-model li.unlocked svg,
.process-model li.lastUnlocked svg {
	color: #FFEBC9;
	background: #fff;
	border: 2px solid #FFEBC9;
}
.process-model li.active svg,
.process-model li.visited svg  {
	color: #1a1a1a !important;
	background: #fff !important;
	border-color: #1a1a1a !important;
}
.process-model li p {
	font-family: 'Muli Light', sans-serif;
	font-size: 16px;
	text-transform: uppercase;
	color: #e5e5e5;
	margin-top: 11px;
}
.process-model li.unlocked p,
.process-model li.lastUnlocked p { font-family: 'Muli', sans-serif; color: #FFEBC9; }
.process-model.contact-us-tab li.visited a,
.process-model.contact-us-tab li.visited p {
	color: #606060!important;
	font-weight: normal
}
.process-model.contact-us-tab li::after  {
	display: none; 
}
.process-model.contact-us-tab li.visited svg {
	border-color: #e5e5e5; 
}

.process-model li.finished::after { background: #1a1a1a !important; }
.process-model li.finished svg { border-color: #1a1a1a !important; }
.process-model li.finished svg:before { color: #1a1a1a !important; }
.process-model li.finished p { color: #1a1a1a !important; }

@media screen and (max-width: 992px) {
	.process-model li::after {
		right: 120px;
	}
}
@media screen and (max-width: 767px) {
	.process-model li::after {
		right: 90px;
	}
}
@media screen and (max-width: 560px) {
  .more-icon-preocess.process-model li span {
		font-size: 23px;
		height: 50px;
		line-height: 46px;
		width: 50px;
	}
	.more-icon-preocess.process-model li::after {
		top: 24px;
	}
	.process-model li::after {
		right: 50px;
		margin-top: 10px;
	}
	.more-icon-preocess.process-model li p {
		font-size: 13px;
	}
}
@media screen and (max-width: 380px) { 
	.process-model.more-icon-preocess li {
		width: 25%;
	}
	.more-icon-preocess.process-model li span {
		font-size: 16px;
		height: 35px;
		line-height: 32px;
		width: 35px;
	}
	.more-icon-preocess.process-model li::after {
		top: 18px;
	}
	.process-model.more-icon-preocess {
		text-align: center;
	}
	.process-model li::after {
		margin-top: 15px;
	}

    .process-model li.unlocked svg,
    .process-model li.lastUnlocked svg {
        color: #FFEBC9;
        background: #fff;
        border: 2px solid #FFEBC9;
    }
}
</style>