export async function load ({ url }) {
    const memberResponse = await fetch("https://fdnd.directus.app/items/person/164");
    const memberData = await memberResponse.json();
    console.log(memberData)

    return {member: memberData.data}


}

