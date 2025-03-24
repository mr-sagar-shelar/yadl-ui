import type { Meta, StoryObj } from "@storybook/react";
import LaravelAndVueLaravelAndVue from "../LaravelAndVueLaravelAndVue";

const meta: Meta<typeof LaravelAndVueLaravelAndVue> = { title: "unDraw/LaravelAndVueLaravelAndVue", component: LaravelAndVueLaravelAndVue };

export default meta;
type Story = StoryObj<typeof LaravelAndVueLaravelAndVue>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
