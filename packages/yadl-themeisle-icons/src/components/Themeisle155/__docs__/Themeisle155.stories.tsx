import type { Meta, StoryObj } from "@storybook/react";
import Themeisle155 from "../Themeisle155";

const meta: Meta<typeof Themeisle155> = { title: "Themeisle/Themeisle155", component: Themeisle155 };

export default meta;
type Story = StoryObj<typeof Themeisle155>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
