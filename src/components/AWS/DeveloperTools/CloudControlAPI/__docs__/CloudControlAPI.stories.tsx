import type { Meta, StoryObj } from "@storybook/react";
import CloudControlAPI from "../CloudControlAPI";

const meta: Meta<typeof CloudControlAPI> = { title: "AWS/DeveloperTools/CloudControlAPI", component: CloudControlAPI };

export default meta;
type Story = StoryObj<typeof CloudControlAPI>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
