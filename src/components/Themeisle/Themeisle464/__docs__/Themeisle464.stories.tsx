import type { Meta, StoryObj } from "@storybook/react";
import Themeisle464 from "../Themeisle464";

const meta: Meta<typeof Themeisle464> = { title: "Themeisle/Themeisle464", component: Themeisle464 };

export default meta;
type Story = StoryObj<typeof Themeisle464>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
