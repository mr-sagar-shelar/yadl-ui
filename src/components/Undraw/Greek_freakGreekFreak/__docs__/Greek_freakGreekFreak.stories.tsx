import type { Meta, StoryObj } from "@storybook/react";
import Greek_freakGreekFreak from "../Greek_freakGreekFreak";

const meta: Meta<typeof Greek_freakGreekFreak> = { title: "unDraw/Greek_freakGreekFreak", component: Greek_freakGreekFreak };

export default meta;
type Story = StoryObj<typeof Greek_freakGreekFreak>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
