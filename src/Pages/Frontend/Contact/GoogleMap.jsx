import React from 'react';

export default function GoogleMap() {
    return (
        <div>
            <iframe
                title="City Mall Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.133708682069!2d73.10269158723152!3d31.410441986221198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922680c4dbc7b2f%3A0x4f1e38e1f905b72d!2sCity%20Mall%20(pmart.pk)!5e0!3m2!1sen!2sru!4v1707568297382!5m2!1sen!2sru"
                style={{ width: "100%", height: "450" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}
