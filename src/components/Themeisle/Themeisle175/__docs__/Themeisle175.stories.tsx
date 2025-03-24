import type { Meta, StoryObj } from "@storybook/react";
import Themeisle175 from "../Themeisle175";

const meta: Meta<typeof Themeisle175> = { title: "Themeisle/Themeisle175", component: Themeisle175 };

export default meta;
type Story = StoryObj<typeof Themeisle175>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
