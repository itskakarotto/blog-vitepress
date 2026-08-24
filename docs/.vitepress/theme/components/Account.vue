<template>
    <div class="account-container">
      <h1>💸 个人记账</h1>
  
      <!-- 统计卡片 -->
      <div class="stats">
        <div class="stat-item income">
          <span class="label">总收入</span>
          <span class="value">¥{{ totalIncome.toFixed(2) }}</span>
        </div>
        <div class="stat-item expense">
          <span class="label">总支出</span>
          <span class="value">¥{{ totalExpense.toFixed(2) }}</span>
        </div>
        <div class="stat-item balance" :class="{ positive: balance >= 0, negative: balance < 0 }">
          <span class="label">结余</span>
          <span class="value">¥{{ balance.toFixed(2) }}</span>
        </div>
      </div>
  
      <!-- 支出分类 -->
      <div class="section">
        <h2>📤 支出分类</h2>
        <div class="category-list">
          <div
            v-for="item in expenseSummary"
            :key="item.category"
            class="category-wrapper"
          >
            <div
              class="category-item expense-item"
              @click="toggleCategory('expense', item.category)"
            >
              <span class="cat-icon">{{ getCategoryIcon(item.category) }}</span>
              <span class="cat-name">{{ item.category }}</span>
              <span class="cat-amount">¥{{ item.total.toFixed(2) }}</span>
              <span class="cat-count">{{ item.count }} 笔</span>
              <span class="expand-icon">{{ isExpanded('expense', item.category) ? '▾' : '▸' }}</span>
            </div>
            <div v-if="isExpanded('expense', item.category)" class="detail-list">
              <div
                v-for="record in getCategoryDetails('expense', item.category)"
                :key="record.id"
                class="detail-item"
              >
                <span class="detail-date">{{ record.date }}</span>
                <span class="detail-note">{{ record.note || '-' }}</span>
                <span class="detail-amount expense">-¥{{ record.amount.toFixed(2) }}</span>
              </div>
              <div v-if="getCategoryDetails('expense', item.category).length === 0" class="empty-tip">
                暂无记录
              </div>
            </div>
          </div>
          <div v-if="expenseSummary.length === 0" class="empty-tip">暂无支出记录</div>
        </div>
      </div>
  
      <!-- 收入分类 -->
      <div class="section">
        <h2>📥 收入分类</h2>
        <div class="category-list">
          <div
            v-for="item in incomeSummary"
            :key="item.category"
            class="category-wrapper"
          >
            <div
              class="category-item income-item"
              @click="toggleCategory('income', item.category)"
            >
              <span class="cat-icon">{{ getCategoryIcon(item.category) }}</span>
              <span class="cat-name">{{ item.category }}</span>
              <span class="cat-amount">¥{{ item.total.toFixed(2) }}</span>
              <span class="cat-count">{{ item.count }} 笔</span>
              <span class="expand-icon">{{ isExpanded('income', item.category) ? '▾' : '▸' }}</span>
            </div>
            <div v-if="isExpanded('income', item.category)" class="detail-list">
              <div
                v-for="record in getCategoryDetails('income', item.category)"
                :key="record.id"
                class="detail-item"
              >
                <span class="detail-date">{{ record.date }}</span>
                <span class="detail-note">{{ record.note || '-' }}</span>
                <span class="detail-amount income">+¥{{ record.amount.toFixed(2) }}</span>
              </div>
              <div v-if="getCategoryDetails('income', item.category).length === 0" class="empty-tip">
                暂无记录
              </div>
            </div>
          </div>
          <div v-if="incomeSummary.length === 0" class="empty-tip">暂无收入记录</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { records, categoryIconMap } from '../accountData.js'
  
  export default {
    name: 'Account',
    data() {
      return {
        records,
        expanded: {},
      }
    },
    computed: {
      totalIncome() {
        return this.records
          .filter(r => r.type === 'income')
          .reduce((sum, r) => sum + r.amount, 0)
      },
      totalExpense() {
        return this.records
          .filter(r => r.type === 'expense')
          .reduce((sum, r) => sum + r.amount, 0)
      },
      balance() {
        return this.totalIncome - this.totalExpense
      },
      expenseSummary() {
        return this.sumByCategory('expense')
      },
      incomeSummary() {
        return this.sumByCategory('income')
      },
    },
    methods: {
      sumByCategory(type) {
        const map = {}
        this.records
          .filter(r => r.type === type)
          .forEach(r => {
            if (!map[r.category]) {
              map[r.category] = { total: 0, count: 0 }
            }
            map[r.category].total += r.amount
            map[r.category].count += 1
          })
        return Object.keys(map)
          .map(key => ({
            category: key,
            total: Math.round(map[key].total * 100) / 100,
            count: map[key].count,
          }))
          .sort((a, b) => b.total - a.total)
      },
      getCategoryDetails(type, category) {
        return this.records
          .filter(r => r.type === type && r.category === category)
          .sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id)
      },
      getCategoryIcon(category) {
        return categoryIconMap[category] || '📌'
      },
      getKey(type, category) {
        return `${type}-${category}`
      },
      isExpanded(type, category) {
        return !!this.expanded[this.getKey(type, category)]
      },
      toggleCategory(type, category) {
        const key = this.getKey(type, category)
        const willExpand = !this.expanded[key]
        this.expanded[key] = willExpand
        this.expanded = { ...this.expanded }
      },
    },
  }
  </script>
  
  <style src="../account.css" scoped></style>