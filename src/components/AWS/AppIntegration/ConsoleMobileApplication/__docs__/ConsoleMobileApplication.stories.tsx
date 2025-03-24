import type { Meta, StoryObj } from "@storybook/react";
import ConsoleMobileApplication from "../ConsoleMobileApplication";

const meta: Meta<typeof ConsoleMobileApplication> = { title: "AWS/AppIntegration/ConsoleMobileApplication", component: ConsoleMobileApplication };

export default meta;
type Story = StoryObj<typeof ConsoleMobileApplication>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
