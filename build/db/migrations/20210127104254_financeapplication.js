"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema
            .createTable('teams', (teams) => {
            teams.increments();
            teams.string('company_name').notNullable();
            teams.string('contact_number').notNullable();
            teams.string('contact_name').notNullable();
            teams.string('email').notNullable();
            teams.string('password').notNullable();
            teams.string('referral_id').defaultTo(null);
        })
            .createTable('users', (users) => {
            users.increments();
            users
                .string('email')
                .notNullable()
                .unique();
            users.string('password').notNullable();
            users.string('referral_id').defaultTo(null);
            users.uuid('referrer_id').notNullable();
        })
            .createTable('profiles', (profiles) => {
            profiles.increments();
            profiles.string('first_name').notNullable();
            profiles.string('last_name').notNullable();
            profiles.string('credit_score').defaultTo(null);
            profiles.date('last_updated').defaultTo(knex.fn.now());
            profiles.string('currency').notNullable();
            profiles
                .integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
            .createTable('banks', banks => {
            banks.increments();
            banks.string('bank_name').notNullable();
            banks.integer('checking_account_balance').notNullable();
            banks.decimal('checking_account_interest_rate', null).notNullable();
            banks.integer('savings_account_balance').notNullable();
            banks.decimal('savings_account_interest_rate', null).notNullable();
            banks
                .integer('profile_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
            .createTable('transfers', transfers => {
            transfers.string('from_bank').notNullable();
            transfers.string('from_account').notNullable();
            transfers.string('to_bank').notNullable();
            transfers.string('to_account').notNullable();
            transfers.string('frequency').notNullable();
            transfers.date('next_transfer').notNullable();
            transfers.integer('transfer_amount').notNullable();
            transfers
                .integer('bank_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('banks')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
            .createTable('income', income => {
            income.increments();
            income.integer('pre_tax_income').notNullable();
            income.integer('post_tax_income').notNullable();
            income.string('income_source').notNullable();
            income.string('income_stream').notNullable();
            income.boolean('isa_income').defaultTo(false);
            income.string('bank_name').notNullable();
            income.string('account_name');
            income.string('payment_frequency').notNullable();
            income.date('next_pay_day');
            income
                .integer('profile_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
            // .createTable('streams', streams => {
            //   streams.increments();
            //   streams.string('income_stream').notNullable();
            // })
            // .createTable('income_streams', income_streams => {
            //   income_streams.increments();
            //   income_streams
            //     .integer('income_id')
            //     .unsigned()
            //     .references('id')
            //     .inTable('income')
            //     .onDelete('CASCADE')
            //     .onUpdate('CASCADE');
            //   income_streams
            //     .integer('streams_id')
            //     .unsigned()
            //     .references('id')
            //     .inTable('streams')
            //     .onDelete('CASCADE')
            //     .onUpdate('CASCADE');
            // })
            .createTable('expenses', expenses => {
            expenses.increments();
            expenses.string('expense_name').notNullable();
            expenses.integer('amount').notNullable();
            expenses.string('frequency').notNullable();
            expenses.date('next_due_date');
            expenses.string('payment_method');
            expenses.string('payment_type');
            expenses.boolean('subscription').notNullable();
            expenses.string('category').notNullable();
            expenses
                .integer('profile_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
            .createTable('loans', loans => {
            loans.increments();
            loans.integer('original_loan_amount').notNullable();
            loans.integer('outstanding_loan_amount').notNullable();
            loans.integer('interest_rate').notNullable();
            loans.integer('minimum_payment').notNullable();
            loans.integer('current_payment').notNullable();
            loans.string('loan_name').notNullable();
            loans.string('loan_type').notNullable();
            loans.date('next_due_date').notNullable();
            loans.string('payment_frequency').notNullable();
            loans.string('payment_method').notNullable();
            loans.string('payment_type');
            loans
                .integer('profile_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
            .createTable('credit_cards', credit_cards => {
            credit_cards.increments();
            credit_cards.integer('outstanding_credit').notNullable();
            credit_cards.integer('credit_limit').notNullable();
            credit_cards.integer('interest_rate').notNullable();
            credit_cards.integer('minimum_payment').notNullable();
            credit_cards.integer('current_payment').notNullable();
            credit_cards.string('credit_card_name').notNullable();
            credit_cards.date('next_due_date').notNullable();
            credit_cards.string('payment_frequency').notNullable();
            credit_cards.string('payment_method').notNullable();
            credit_cards.string('payment_type');
            credit_cards
                .integer('profile_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
            .createTable('assets', assets => {
            assets.increments();
            assets.integer('asset_value').notNullable();
            assets.string('asset_name').notNullable();
            assets.string('asset_type').notNullable();
            assets.integer('growth_rate').defaultTo(0);
            assets.string('contribution_frequency');
            assets.integer('contribution_amount');
            assets.date('next_contribution');
            assets.string('payment_method');
            assets.string('payment_type');
            assets.boolean('pre_tax').defaultTo(false);
            assets.boolean('employee_match').defaultTo(false);
            assets
                .integer('profile_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
            .createTable('isa', isa => {
            isa.increments();
            isa.integer('income_share_percentage').notNullable();
            isa.integer('required_payments');
            isa.integer('payment_cap').notNullable();
            isa.integer('minimum_income').notNullable();
            isa.date('payment_due_date').notNullable();
            isa.string('payment_frequency').notNullable();
            isa.string('payment_method').notNullable();
            isa
                .integer('profile_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
            .createTable('affiliate', affiliate => {
            affiliate.increments();
            affiliate.string('referrer_id');
            affiliate.string('code').unique().notNullable();
            affiliate
                .integer('profile_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('profiles')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema
            .dropTableIfExists('affiliate')
            .dropTableIfExists('isa')
            .dropTableIfExists('assets')
            .dropTableIfExists('credit_cards')
            .dropTableIfExists('loans')
            .dropTableIfExists('expenses')
            .dropTableIfExists('income')
            .dropTableIfExists('transfers')
            .dropTableIfExists('banks')
            .dropTableIfExists('profiles')
            .dropTableIfExists('users')
            .dropTableIfExists('teams');
    });
}
exports.down = down;
