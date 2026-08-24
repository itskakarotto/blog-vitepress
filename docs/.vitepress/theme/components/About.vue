<template>
  <div class="about-page">
    <div class="card">
      <!-- 头像 -->
      <img class="avatar" src="/avatar.jpg" alt="Kakarotto" />

      <!-- 名字 -->
      <h1 class="name">Kakarotto</h1>

      <!-- 社交链接 - 名字下方 -->
      <div class="social">
        <a
          href="https://github.com/itskakarotto"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path
              fill="currentColor"
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
            />
          </svg>
        </a>

        <!-- <a
          href="https://twitter.com/你的用户名"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path
              fill="currentColor"
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
        </a> -->

        <!-- <a href="mailto:coderzds@163.com" class="social-link">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path
              fill="currentColor"
              d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67z"
            />
            <path
              fill="currentColor"
              d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908z"
            />
          </svg>
        </a> -->

        <!-- 微信：点击弹出二维码 -->
        <!-- <div class="social-link wechat-wrapper" @click="showQr = true">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path
              fill="currentColor"
              d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm7.822 3.08c-3.569 0-6.46 2.685-6.46 5.998 0 3.313 2.891 5.998 6.46 5.998.945 0 1.832-.2 2.638-.548a.68.68 0 0 1 .545.072l1.515.892a.296.296 0 0 0 .147.047.282.282 0 0 0 .282-.282c0-.06-.023-.117-.04-.174l-.319-1.189a.53.53 0 0 1 .156-.55c1.488-1.197 2.384-2.842 2.384-4.66 0-3.313-2.89-5.998-6.46-5.998zm-3.09 3.52c.493 0 .893.407.893.91 0 .503-.4.91-.893.91a.902.902 0 0 1-.892-.91c0-.503.4-.91.892-.91zm6.18 0c.493 0 .893.407.893.91 0 .503-.4.91-.893.91a.902.902 0 0 1-.892-.91c0-.503.4-.91.892-.91z"
            />
          </svg>
        </div> -->

        <a href="/feed.rss" class="social-link">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path
              fill="currentColor"
              d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.293 3.29A3.295 3.295 0 0 1 0 20.71c0-1.816 1.48-3.295 3.291-3.295zM0 10.145v4.8c5.067 0 9.055 3.989 9.055 9.055h4.8c0-7.629-6.226-13.855-13.855-13.855z"
            />
          </svg>
        </a>
      </div>

      <!-- 随机标语 -->
      <p class="title-tagline">{{ randomTagline }}</p>

      <!-- 趣味自我介绍 -->
      <div class="bio">
        <p>{{ randomBio }}</p>
      </div>

      <!-- 趣味标签 -->
      <div class="fun-tags">
        <span class="fun-tag" v-for="tag in funTags" :key="tag">{{ tag }}</span>
      </div>

      <!-- Q&A -->
      <div class="section-title">🤔 关于我的一点冷知识</div>
      <div class="qa-list">
        <div class="qa-item" v-for="(item, index) in qaList" :key="index">
          <div class="question">{{ item.q }}</div>
          <div class="answer">{{ item.a }}</div>
        </div>
      </div>

      <!-- 我喜欢 -->
      <div class="section-title">❤️ 我喜欢</div>
      <div class="likes">
        <span class="like-item" v-for="like in likes" :key="like">{{
          like
        }}</span>
      </div>

      <!-- 我不喜欢 -->
      <div class="section-title">😤 我不喜欢</div>
      <div class="dislikes">
        <span class="dislike-item" v-for="dislike in dislikes" :key="dislike">{{
          dislike
        }}</span>
      </div>

      <!-- 结尾 -->
      <div class="footer-message">
        {{ randomFooter }}
      </div>
    </div>

    <!-- ====== 二维码弹窗（点击微信图标弹出） ====== -->
    <Teleport to="body">
      <div v-if="showQr" class="qr-modal" @click.self="showQr = false">
        <div class="qr-modal-content">
          <button class="qr-close-btn" @click="showQr = false">✕</button>
          <img src="/wechat-qr.png" alt="微信二维码" class="qr-image" />
          <p class="qr-tip">👋 请备注来自博客</p>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      showQr: false, // 控制弹窗显示
      taglines: [
        "🌱 正在努力学习如何不熬夜",
        "☕ 咖啡因驱动的程序员",
        "📖 读书比写代码慢，但快乐不输",
        "🎮 游戏打不过就写脚本（不是外挂）",
        "🧠 脑内小剧场24小时营业",
        "🚲 不会骑车，但代码写得还不错",
        "🎯 梦想是成为独立开发者",
        "🧘 正在练习“不生气”这门技术",
        "📦 满脑子都是“这个能不能封装一下”",
        "🐢 写代码快，回消息慢",
        "🔮 相信 bug 都是暂时的，咖啡是永恒的",
        "🏴‍☠️ 数字世界的海盗，专挖宝藏级开源项目",
      ],

      bios: [
        "你好呀！我是 Kakarotto，一个写代码写得忘记吃饭的家伙。白天在互联网公司搬砖，晚上在自己的博客里种树。如果你发现我的博客有 bug，那一定是 feature（笑）。",
        "这里是我在数字世界的秘密基地。我写博客的速度比写代码慢，但我保证每一篇都认真对待（至少，不注水）。欢迎来坐坐，我请你喝“虚拟咖啡”！☕",
        "程序员，但也是人类。喜欢捣鼓新东西，也经常把项目做到一半就跑去看番。如果你也一样，那我们一定聊得来！",
        "一个不太正经但还算靠谱的程序员。日常三件事：写代码、看书、想下一顿吃什么。人生信条是“能跑就别重构，能躺着就别坐着”。",
        "白天在工位上装大人，晚上回家写代码装大神。目前正在努力平衡“技术追求”和“不秃头”之间的矛盾。",
        "全栈工程师，但更像是“全栈找 bug 工程师”。相信好的代码不是写出来的，是改出来的。欢迎来我的博客监督我更新！",
        "一个理想主义的技术人，总想把事情做得更好一点。虽然经常被现实打脸，但脸皮已经练出来了。博客是我和世界对话的方式之一。",
      ],

      funTags: [
        "😺 猫派",
        "☕ 咖啡续命",
        "📱 手机重度用户",
        "🎧 耳机不离身",
        "🌙 夜猫子",
        "📚 书堆爱好者",
        "🧩 拼图不拼完不睡觉",
        "🎵 歌单混乱但好听",
        "🧦 袜子颜色从不配对",
        "🗣️ 社恐但话痨",
        "💻 键盘收藏家",
        "🧠 脑洞常年超载",
        "⏰ 拖延症晚期",
        "🍜 面食主义者",
        "🎨 审美洁癖患者",
      ],

      qaList: [
        {
          q: "为什么叫 Kakarotto？",
          a: "因为我是龙珠粉，卡卡罗特（悟空）太帅了！",
        },
        {
          q: "写博客多久了？",
          a: "断断续续好几年了，但认真写也就最近两年。",
        },
        {
          q: "平时会看什么书？",
          a: "技术书、科幻、历史、漫画……什么都看，时间不够用！",
        },
        { q: "写代码最怕什么？", a: "最怕产品经理说“这个需求很简单”。" },
        {
          q: "怎么学的新技术？",
          a: "看文档 ➜ 写 demo ➜ 踩坑 ➜ 写文章复盘。循环往复。",
        },
        {
          q: "为什么开这个博客？",
          a: "想逼自己多输出，顺便结交一些志同道合的朋友。",
        },
      ],

      likes: [
        "🍜 拉面",
        "📷 街头摄影",
        "🎬 老电影",
        "🌧️ 下雨天",
        "🐱 云吸猫",
        "☕ 手冲咖啡",
        "📖 纸质书的味道",
        "🎧 下雨天听歌",
        "🧩 拼图完成的那一刻",
        "🌳 午后的公园",
        "🍂 秋天的落叶",
        "🎹 纯音乐",
        "📝 写完一篇文章的满足感",
        "🏔️ 山顶的风景",
      ],

      dislikes: [
        "🌶️ 吃辣（我是真的不行）",
        "📱 开会超过1小时",
        "🔕 手机没电",
        "🐢 网速慢",
        "📦 没注释的代码",
        "🔄 临下班前的需求变更",
        "🧹 强迫症清理桌面却发现找不到文件",
        "📝 写完文章发现没保存",
        "💢 复制代码时漏掉最后一个字符",
      ],

      footers: [
        "好了，这就是我。感谢你看到这里，我们博客见！👋",
        "认识你很高兴！有空常来坐坐，反正我也不会赶你走 😄",
        "写的比说的多，这就是我。下篇文章见！📝",
        "我还有很多故事，但今天先讲到这里。下次见面，记得带咖啡！☕",
        "很感谢你耐心看完这一大段。如果能让你笑一下，我就赢了！🎯",
        "如果觉得这篇“关于我”还可以，记得给个赞（虽然这里没点赞功能）😂",
      ],
    };
  },
  computed: {
    randomTagline() {
      return this.taglines[Math.floor(Math.random() * this.taglines.length)];
    },
    randomBio() {
      return this.bios[Math.floor(Math.random() * this.bios.length)];
    },
    randomFooter() {
      return this.footers[Math.floor(Math.random() * this.footers.length)];
    },
  },
};
</script>

<style scoped>
.about-page {
  max-width: 750px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.card {
  background: var(--vp-c-bg-soft);
  border-radius: 28px;
  padding: 2.5rem 2rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
  text-align: center;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s;
}

.card:hover {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}

.avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--vp-c-brand-1);
  margin-bottom: 0.3rem;
}

.name {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.25rem 0 0.6rem;
  color: var(--vp-c-text-1);
}

/* ===== 社交链接 ===== */
.social {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin: 0 0 0.6rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: all 0.25s;
  border: 1px solid var(--vp-c-divider);
  cursor: pointer;
}

.social-link:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
  border-color: var(--vp-c-brand-1);
  transform: translateY(-3px) scale(1.05);
}

.social-link svg {
  display: block;
}

/* ===== 微信图标（无需额外样式，点击由 JS 控制） ===== */
.wechat-wrapper {
  cursor: pointer;
}

/* ===== 二维码弹窗（居中，自适应） ===== */
.qr-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  animation: fadeIn 0.25s ease;
}

.qr-modal-content {
  background: var(--vp-c-bg-soft);
  border-radius: 24px;
  padding: 30px 30px 20px;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--vp-c-divider);
}

.qr-close-btn {
  position: absolute;
  top: 10px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.8rem;
  line-height: 1;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: transform 0.2s;
  padding: 0 6px;
}

.qr-close-btn:hover {
  transform: rotate(90deg) scale(1.2);
  color: var(--vp-c-text-1);
}

.qr-image {
  max-width: 70vw;
  max-height: 70vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 16px;
  background: #fff;
  display: block;
  margin: 0 auto;
}

.qr-tip {
  margin-top: 14px;
  font-size: 1rem;
  color: var(--vp-c-text-2);
  text-align: center;
}

/* 淡入动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* 暗色模式适配 */
.dark .qr-modal-content {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

/* ===== 其他原有样式 ===== */
.title-tagline {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  margin: 0.2rem 0 1rem;
  font-style: italic;
}

.bio {
  text-align: left;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-mute);
  padding: 1.2rem 1.5rem;
  border-radius: 16px;
  margin: 1.2rem 0 1.5rem;
  border-left: 4px solid var(--vp-c-brand-1);
}

.bio p {
  margin: 0;
}

.fun-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0 1.8rem;
}

.fun-tag {
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
  padding: 0.25rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.2s;
  cursor: default;
}

.fun-tag:hover {
  transform: scale(1.05) rotate(-2deg);
  background: var(--vp-c-brand-1);
  color: #fff;
  border-color: var(--vp-c-brand-1);
}

.section-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-align: left;
  margin: 1.8rem 0 0.8rem;
  padding-bottom: 0.2rem;
}

.qa-list {
  text-align: left;
  margin: 0.5rem 0;
}

.qa-item {
  background: var(--vp-c-bg-mute);
  padding: 0.6rem 1rem;
  border-radius: 12px;
  margin-bottom: 0.6rem;
}

.question {
  font-weight: 600;
  color: var(--vp-c-brand-1);
  font-size: 0.9rem;
}

.answer {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  margin-top: 0.1rem;
}

.likes,
.dislikes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0 0.2rem;
}

.like-item {
  background: rgba(52, 211, 153, 0.15);
  color: var(--vp-c-text-1);
  padding: 0.2rem 0.8rem;
  border-radius: 16px;
  font-size: 0.9rem;
  border: 1px solid rgba(52, 211, 153, 0.2);
}

.dislike-item {
  background: rgba(251, 146, 60, 0.12);
  color: var(--vp-c-text-1);
  padding: 0.2rem 0.8rem;
  border-radius: 16px;
  font-size: 0.9rem;
  border: 1px solid rgba(251, 146, 60, 0.2);
}

.footer-message {
  margin: 1.8rem 0 0.5rem;
  font-size: 1.05rem;
  color: var(--vp-c-text-2);
  font-style: italic;
  padding: 0.8rem;
  background: var(--vp-c-bg-mute);
  border-radius: 12px;
}

.dark .card {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

.dark .bio {
  background: var(--vp-c-bg-mute);
}

.dark .qa-item {
  background: var(--vp-c-bg-mute);
}

@media (max-width: 640px) {
  .card {
    padding: 1.8rem 1.2rem;
  }
  .fun-tags {
    gap: 0.4rem;
  }
  .fun-tag {
    font-size: 0.8rem;
    padding: 0.2rem 0.8rem;
  }
  .social {
    gap: 0.5rem;
  }
  .social-link {
    width: 36px;
    height: 36px;
  }
  .qr-modal-content {
    padding: 20px 20px 16px;
  }
  .qr-image {
    max-width: 85vw;
    max-height: 60vh;
  }
  .qr-close-btn {
    font-size: 1.5rem;
    top: 6px;
    right: 12px;
  }
}
</style>