// User Details Interface for Password Manager
// Sections 1-4: Basic Info, Security, Preferences, Account Monitoring

// Section 1: Basic Info
interface BasicInfo {
    fullName: string;
    email: string;
    profilePicture?: string; // Optional field
}

// Section 2: Security
interface SecurityQuestion {
    question: string;
    answer: string;
}

interface TwoFactorMethod {
    type: 'app' | 'sms' | 'email' | 'hardware';
    isEnabled: boolean;
    lastVerified?: Date;
}

interface SecuritySettings {
    masterPassword: string; // This would be hashed in actual implementation
    securityQuestions: SecurityQuestion[];
    twoFactorAuthentication: TwoFactorMethod[];
    recoveryOptions: {
        backupEmail?: string;
        phoneNumber?: string;
        recoveryKeys?: string[];
    };
}

// Section 3: Preferences
interface UserPreferences {
    passwordSettings: {
        defaultLength: number;
        includeUppercase: boolean;
        includeLowercase: boolean;
        includeNumbers: boolean;
        includeSymbols: boolean;
        avoidAmbiguousCharacters: boolean;
    };
    autoLogoutAfterMinutes: number;
    darkMode: boolean;
    showPasswordHealth: boolean;
    defaultViewMode: 'list' | 'tiles' | 'details';
}

// Section 4: Account Monitoring
interface LoginEvent {
    timestamp: Date;
    ipAddress: string;
    deviceInfo: string;
    browser: string;
    location?: string;
    successful: boolean;
}

interface AccountMonitoring {
    lastLoginDate: Date;
    loginHistory: LoginEvent[];
    passwordHealth: {
        overallScore: number; // 0-100
        weakPasswords: number;
        reusedPasswords: number;
        oldPasswords: number;
        compromisedPasswords: number;
    };
    lastPasswordChange: Date;
}

// Combined User Details Interface
interface UserDetails {
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    basicInfo: BasicInfo;
    security: SecuritySettings;
    preferences: UserPreferences;
    accountMonitoring: AccountMonitoring;
}

// Example usage:
const createNewUser = (email: string, fullName: string, masterPassword: string): UserDetails => {
    const now = new Date();

    return {
        userId: generateUniqueId(), // This would be a function to generate a unique ID
        createdAt: now,
        updatedAt: now,
        basicInfo: {
            email,
            fullName,
            profilePicture: undefined
        },
        security: {
            masterPassword: hashPassword(masterPassword), // This would hash the password
            securityQuestions: [],
            twoFactorAuthentication: [
                { type: 'app', isEnabled: false }
            ],
            recoveryOptions: {}
        },
        preferences: {
            passwordSettings: {
                defaultLength: 16,
                includeUppercase: true,
                includeLowercase: true,
                includeNumbers: true,
                includeSymbols: true,
                avoidAmbiguousCharacters: true
            },
            autoLogoutAfterMinutes: 15,
            darkMode: false,
            showPasswordHealth: true,
            defaultViewMode: 'list'
        },
        accountMonitoring: {
            lastLoginDate: now,
            loginHistory: [{
                timestamp: now,
                ipAddress: '0.0.0.0',
                deviceInfo: 'Unknown',
                browser: 'Unknown',
                successful: true
            }],
            passwordHealth: {
                overallScore: 0,
                weakPasswords: 0,
                reusedPasswords: 0,
                oldPasswords: 0,
                compromisedPasswords: 0
            },
            lastPasswordChange: now
        }
    };
};

// Helper functions (implementations would be elsewhere)
function generateUniqueId(): string {
    return Math.random().toString(36).substring(2, 15);
}

function hashPassword(password: string): string {
    // In a real application, use a proper hashing algorithm
    return `hashed_${password}`;
}