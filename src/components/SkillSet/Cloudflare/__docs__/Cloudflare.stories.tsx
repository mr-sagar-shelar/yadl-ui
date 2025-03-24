import type { Meta, StoryObj } from "@storybook/react";
import Cloudflare from "../Cloudflare";

const meta: Meta<typeof Cloudflare> = { title: "SkillSet/Cloudflare", component: Cloudflare };

export default meta;
type Story = StoryObj<typeof Cloudflare>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
