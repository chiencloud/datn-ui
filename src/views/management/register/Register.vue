<template>
    <div class="col-md-20">
        <div class="card card-container">
            <image-upload width="100px" :imageVal="imgaeLogo" @onFileSelected="changeMainImage" />
            <form name="form" @submit.prevent="">
                <div v-if="!successful">
                    <div class="form-group">
                        <v-card-text>
                            <v-form
                                ref="form"
                                v-model="validForm"
                                lazy-validation
                                class="role-form"
                            >
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="5">
                                            <v-text-field
                                                label="Tên shop (*)"
                                                required
                                                :rules="[rules.shopname]"
                                                v-model="shopInfo.shopname"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" sm="5">
                                            <v-text-field
                                                label="Họ tên chủ shop (*)"
                                                required
                                                :rules="[rules.employeename]"
                                                v-model="shopInfo.employeename"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" sm="5">
                                            <v-text-field
                                                label="Email (*)"
                                                required
                                                :rules="[rules.emailMatch]"
                                                v-model="shopInfo.email"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" sm="5">
                                            <v-text-field
                                                label="Mã chi nhánh (*)"
                                                required
                                                :rules="[rules.branchCodeRule]"
                                                v-model="shopInfo.branchcode"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col sm="2"></v-col>
                                        <v-col cols="12" sm="5">
                                            <v-text-field
                                                label="Tên chi nhánh (*)"
                                                :rules="[rules.branchNameRule]"
                                                required
                                                v-model="shopInfo.branchname"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="5">
                                            <v-combobox
                                                label="Tỉnh thành (*)"
                                                v-model="selectedProvince"
                                                item-text="text"
                                                item-value="id"
                                                :items="listProvince"
                                                return-object
                                                dense
                                                @change="changeProvince($event)"
                                                :rules="[rules.provinceRule]"
                                            ></v-combobox>
                                        </v-col>
                                        <v-col sm="2"></v-col>
                                        <v-col cols="12" sm="5">
                                            <v-combobox
                                                label="Quận huyện (*)"
                                                v-model="selectedDistrict"
                                                item-text="text"
                                                item-value="id"
                                                :items="listDistrict"
                                                return-object
                                                dense
                                                :disabled="isDisableDistrict"
                                                @change="changeDistrict($event)"
                                                :rules="[rules.districtRule]"
                                            ></v-combobox>
                                        </v-col>
                                        <v-col cols="12" sm="5">
                                            <v-text-field
                                                label="Địa chỉ (*)"
                                                required
                                                dense
                                                :rules="[rules.addressRule]"
                                                v-model="shopInfo.address"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col sm="2"></v-col>
                                        <v-col cols="12" sm="5">
                                            <v-combobox
                                                label="Phường xã (*)"
                                                v-model="selectedWard"
                                                item-text="text"
                                                item-value="id"
                                                :items="listWard"
                                                return-object
                                                dense
                                                :disabled="isDisableWard"
                                                :rules="[rules.wardRule]"
                                            ></v-combobox>
                                        </v-col>
                                        <!-- <v-col cols="12" sm="6">
                                            <v-checkbox
                                                label="Là chi nhánh online"
                                                v-model="
                                                    shopInfo.isaddressdefault
                                                "
                                            ></v-checkbox>
                                        </v-col>
                                        <v-col sm="6"></v-col> -->
                                    </v-row>
                                </v-container>
                            </v-form>
                        </v-card-text>
                    </div>
                    <br />
                    <div class="form-group form-group-cus">
                        <button
                            style="width: 100%;"
                            class="btn btn-primary btn-block"
                            @click="registerShop"
                        >
                            Đăng ký
                        </button>
                    </div>
                </div>
            </form>

            <div
                v-if="message"
                class="alert"
                :class="successful ? 'alert-success' : 'alert-danger'"
            >
                {{ message }}
            </div>
        </div>
    </div>
</template>

<script>
import ImageUpload from "../../common/ImageUpload.vue";
import { FactoryService } from "../../../service/factory/factory.service";
import ShopService from "../../../service/shop.service";
import { AZURE_STORAGE_BASE_URL } from "@/config/config.dev.json";
const LocationService = FactoryService.get("locationService");

export default {
    name: "Register",
    components: {
        ImageUpload,
    },
    data() {
        return {
            user: {},
            submitted: false,
            successful: false,
            imgaeLogo: null,
            validForm: true,
            /**
             * address
             */
            selectedProvince: null,
            listProvince: [],
            isDisableDistrict: true,
            listDistrict: [],
            selectedDistrict: null,
            listWard: [],
            selectedWard: null,
            isDisableWard: true,
            shopInfo: {},
            rules: {
              shopname: (value) => !!value || "Tên shop bắt buộc nhập.",
              employeename: (value) => !!value || "Họ tên chủ shop bắt buộc nhập.",
              branchCodeRule: (value) => !!value || "Mã chi nhánh bắt buộc nhập.",
              branchNameRule: (value) => !!value || "Tên chi nhánh bắt buộc nhập.",
              provinceRule: (value) => !!value || "Vui lòng chọn tỉnh thành",
              districtRule: (value) => !!value || "Vui lòng chọn quận huyện",
              wardRule: (value) => !!value || "Vui lòng chọn phường xã",
              addressRule: (value) => !!value || "Vui lòng nhập địa chỉ",
              emailMatch: [
                (v) => !!v || "E-mail bắt buộc nhập.",
                (v) => /.+@.+\..+/.test(v) || "E-mail không hợp lệ.",
              ],
            },
        };
    },
    created() {
      this.getAllProvince();
    },
    computed: {
        // loggedIn() {
        //   // return this.$store.state.auth.status.loggedIn;
        // },
    },
    mounted() {
        // if (this.loggedIn) {
        //   this.$router.push("/profile");
        // }
    },
    methods: {
        // handleRegister() {
        //     this.message = "";
        //     this.submitted = true;
        //     this.$validator.validate().then((isValid) => {
        //         if (isValid) {
        //             this.$store.dispatch("auth/register", this.user).then(
        //                 (data) => {
        //                     this.message = data.message;
        //                     this.successful = true;
        //                 },
        //                 (error) => {
        //                     this.message =
        //                         (error.response && error.response.data) ||
        //                         error.message ||
        //                         error.toString();
        //                     this.successful = false;
        //                 }
        //             );
        //         }
        //     });
        // },
        /**
         * Lấy danh sách các tỉnh
         */
        getAllProvince() {
          const me = this;

          LocationService.getListProvince()
            .then((result) => {
              if (result && result.data) {
                me.listProvince = result.data.data.map((x) => ({
                  id: x.ProvinceID,
                  text: x.ProvinceName,
                }));
              }
            })
            .catch((e) => {
              console.log(e);
            });
        },
        changeProvince(province) {
          const me = this;
          me.selectedDistrict = null;
          me.selectedWard = null;
          me.deliverPrice = null;
          LocationService.getDistrictByProvince(province.id)
            .then((result) => {
              if (result && result.data) {
                me.isDisableDistrict = false;
                me.listDistrict = result.data.data.map((x) => ({
                  id: x.DistrictID,
                  text: x.DistrictName,
                }));
              }
            })
            .catch((e) => {
              console.log(e);
            });
        },
        changeDistrict(district) {
          const me = this;
          me.selectedWard = null;
          me.deliverPrice = null;
          LocationService.getWardByDistrict(district.id)
            .then((result) => {
              if (result && result.data) {
                me.isDisableWard = false;
                me.listWard = result.data.data.map((x) => ({
                  id: x.WardCode,
                  text: x.WardName,
                }));
              }
            })
            .catch((e) => {
              console.log(e);
            });
        },
        registerShop(){
          const me = this;
          let isValid = me.validateBeforeSave(this.shopInfo);
          if (!isValid) {
            return;
          }
          this.insertShop();
             
        },
        validateBeforeSave(dataSave){
          this.$refs.form.validate();
          if (
            !this.validForm ||
            !dataSave ||
            (dataSave && Object.keys(dataSave).length === 0)
          ) {
            return false;
          }
          return true;
        },
        insertShop(){
          const me = this;
          let productParam = new FormData();
          let data = JSON.parse(JSON.stringify(this.shopInfo));
          productParam.append('shop', JSON.stringify({
            shopname: data.shopname,
            shopinactive: true,
            logo: this.shopInfo.logo
          }))
          productParam.append('branch', JSON.stringify({
            branchcode: data.branchcode,
            branchname: data.branchname,
            address: data.address,
            isaddressdefault: data.isaddressdefault,
            provinceid: data.provinceid,
            provincename: data.provincename,
            districtid: data.districtid,
            districtname: data.districtname,
            wardid: data.wardid,
            wardname: data.wardname
          }))
          productParam.append('employee', JSON.stringify({
            employeecode: "NV00001",
            employeename: data.employeename,
            email: data.email,
          }))
          // let dataSave = {
          //   shop: {
          //     shopname: data.shopname,
          //     shopinactive: true,
          //     logo: this.shopInfo.logo
          //   },
          //   branch: {
          //     branchcode: data.branchcode,
          //     branchname: data.branchname,
          //     address: data.address,
          //     isaddressdefault: data.isaddressdefault,
          //     provinceid: data.provinceid,
          //     provincename: data.provincename,
          //     districtid: data.districtid,
          //     districtname: data.districtname,
          //     wardid: data.wardid,
          //     wardname: data.wardname
          //   },
          //   employee: {
          //     employeecode: "NV00001",
          //     employeename: data.employeename,
          //     email: data.email,
          //   }
          // }
          if(this.fileLogo){
            productParam.append("logo", this.fileLogo, this.fileLogo.name)
          }
          ShopService.addShop(productParam).then((result) => {
            if (result && result.data) {
              if (result.data.success) {
                me.$toast.success("Thêm shop thành công!");
                // me.closeAddRolePopup();
                // this.getDefaultData();
              } else {
                me.$toast.error(result.data.errorMessage);
              }
            }
          });
        },
        /**
         * thay đổi image chính
         */
        changeMainImage(file) {
          if (file) {
            let fileClone = this.renameFile(file, `${Date.now()}`);
            this.shopInfo[
              "logo"
            ] = `${AZURE_STORAGE_BASE_URL}${fileClone.name}`;
            this.fileLogo = fileClone;
          }
        },
        renameFile(originalFile, newName) {
          return new File([originalFile], newName, {
            type: originalFile.type,
            lastModified: originalFile.lastModified,
          });
        },
    },
    watch: {
      selectedProvince: {
        handler: function (val) {
          if (val) {
            this.shopInfo["provinceid"] = val["id"];
            this.shopInfo["provincename"] = val["text"];
          }
        },
        deep: true,
      },
      selectedDistrict: {
        handler: function (val) {
          if (val) {
            this.shopInfo["districtid"] = val["id"];
            this.shopInfo["districtname"] = val["text"];
          }
        },
        deep: true,
      },
      selectedWard: {
        handler: function (val) {
          if (val) {
            this.shopInfo["wardid"] = val["id"];
            this.shopInfo["wardname"] = val["text"];
          }
        },
        deep: true,
      },
    }
};
</script>

<style scoped>
.form-group-cus {
    display: flex;
    align-items: center;
    width: 100%;
}
label {
    display: block;
    margin-top: 10px;
}

.card-container.card {
    max-width: 600px !important;
    padding: 40px 40px;
}

.card {
    background-color: #f7f7f7;
    padding: 20px 25px 30px;
    margin: 0 auto 25px;
    margin-top: 50px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}
</style>
