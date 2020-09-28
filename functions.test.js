import {getContactInfo} from './getContactInfo.js'
import phoneNumber from './phoneNumber.js'
import email from './email.js'

describe("see if getContactInfo is correctly returning the three outputs", () => {

    test("output on simple card", () => {
        const document = ["ASYMMETRIK LTD"," Mike Smith","Senior Software Engineer"," (410)555-1234", "msmith@asymmetrik.com"]

        expect(getContactInfo(document)).toEqual([["Mike", "Smith"],"4105551234","msmith@asymmetrik.com"]) 
    })

    test("check output on card with other unnecesary data(job title, address, fax)", () => {
        const document = ["Foobar Technologies","Analytic Developer","Lisa Huang","1234 Sentry Road","Columbia, MD 12345", "Phone: 410-555-1234", "Fax: 410-555-4321", "lisa.haung@foobartech.com"]

        expect(getContactInfo(document)).toEqual([["Lisa", "Huang"],"4105551234","lisa.haung@foobartech.com"]) 
    })

    test("Arthur Wilson, even more data to parse", () => {
        const document = ["Arthur Wilson","Software Engineer","Decision & Security Technologies", "ABC Technologies","123 North 11th Street", "Suite 229", "Arlington, VA 22209", "Tel: +1 (703) 555-1259", "Fax: +1 (703) 555-1200", "awilson@abctech.com" ]

        expect(getContactInfo(document)).toEqual([["Arthur", "Wilson"],"17035551259","awilson@abctech.com"]) 
    })

    test("Phone number with just spaces", () => {
        const testPhone = "301 633 1626"
        let temp = phoneNumber(testPhone)
        expect(temp).toBe("3016331626")

    })

    test("Phone number with 2 digit country code", () => {
        const testPhone = "+22 301 633 1626"
        let temp = phoneNumber(testPhone)
        expect(temp).toBe("223016331626")
    })

    test("Email with two dots", () => {
        const testEmail = "jason@terpmail.umd.edu"
        let temp = email(testEmail)
        expect(temp).toBe("jason@terpmail.umd.edu")
    })
    


})